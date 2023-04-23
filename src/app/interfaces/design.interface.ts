export interface Design {
    "is_template": boolean,
    "app_reference": {
        "id": string
    },
    "products": {
        "app_product_reference": {},
        "created_at": {}
    }[],
    "tags": string[],
    "is_deleted": boolean,
    "is_premium": boolean,
    "user_reference": {
        "id": string
    },
    "allow_preview": boolean,
    "theme_reference": {
        "id": string
    },
    "author": {
        "name": any
    },
    "module": any,
    "created_at": string,
    "published": boolean,
    "page_format_reference": {
        "id": string
    },
    "printable": boolean,
    "pages": {
        "page_index": number,
        "page_format_id": any
    }[][],
    "app_demo": boolean,
    "provider": string,
    "price": any,
    "is_printable": boolean,
    "is_public": boolean,
    "is_renamed": boolean,
    "published_at": any,
    "slug": any,
    "is_featured": boolean,
    "cover": {
        "raw": string,
        "medium": string,
        "high": string,
        "low": string
    },
    "updated_at": string,
    "thumbs": {
        "raw": string,
        "medium": string,
        "high": string,
        "low": string
    },
    "id": string,
    "title": string
}