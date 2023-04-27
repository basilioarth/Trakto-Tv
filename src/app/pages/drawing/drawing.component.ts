import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  
  private canvas!: ElementRef<HTMLCanvasElement>;
  private isDrawing: boolean;
  private lastX: number;
  private lastY: number;
  private hue: number ;

  public ctx!: CanvasRenderingContext2D;
  public isErasing: boolean;
  public cursorType: string;

  constructor() {
    this.isDrawing  = false;
    this.isErasing = false;
    this.cursorType = 'crosshair';
    this.lastX = 0;
    this.lastY = 0;
    this.hue = 0;
  }

  ngOnInit() {
    let context = this.canvas.nativeElement.getContext('2d');
    if(!context) {
      throw new Error('Não foi possível obter o contexto do canvas');
    }
    this.ctx = context;
    this.canvas.nativeElement.width = document.getElementById('canvas')?.offsetWidth || 1920;
    this.canvas.nativeElement.height = document.getElementById('canvas')?.offsetHeight || 1080;
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 10;

    this.canvas.nativeElement.addEventListener('resize', (e) => {
      this.canvas.nativeElement.width = document.getElementById('canvas')?.offsetWidth || 1920;
      this.canvas.nativeElement.height = document.getElementById('canvas')?.offsetHeight || 1080;
    });

    this.canvas.nativeElement.addEventListener('mousemove', (e) => { 
      if(this.isErasing){
        this.erase(e);
      } else if(this.isDrawing){
        this.draw(e);
      }
    });

    this.canvas.nativeElement.addEventListener('mousedown', (e) => {
      if(!this.isErasing) this.isDrawing = true;
      this.lastX = e.offsetX;
      this.lastY = e.offsetY;
    });

    this.canvas.nativeElement.addEventListener('mouseup', () => this.isDrawing = false);
    this.canvas.nativeElement.addEventListener('mouseout', () => this.isDrawing = false);
  }

  draw(e: MouseEvent): void {
    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
    [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
    this.updateHue();
  }
  
  erase(e: MouseEvent): void {
    this.ctx.clearRect(e.offsetX, e.offsetY, this.ctx.lineWidth*2, this.ctx.lineWidth*2);
  }

  updateHue(): void {
    if (this.hue >= 360) {
      this.hue = 0;
    } else {
      this.hue++;
    }
  }

  toClean(): void {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  changeColor(color: string): void {
    this.ctx.strokeStyle = color;
  }

  changeLineWidth(width: number): void {
    this.ctx.lineWidth = width;
  }

  setErasing(value: boolean): void {
    this.isErasing = value;
    value ? this.cursorType = 'grabbing' : this.cursorType = 'crosshair';
  }
}
