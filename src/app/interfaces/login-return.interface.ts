export interface LoginReturn {
    "id": string,
    "firstname": string,
    "email_verified": boolean,
    "role": {
        "title": string,
        "value": string
    },
    "app_reference": {
        "id": string
    },
    "created_at": string,
    "can_authenticate": boolean,
    "products": string [],
    "force_reset_password": boolean,
    "approved_terms_use": boolean,
    "email": string,
    "customer_id": string,
    "subscription_payment_status": string,
    "subscription_reference": {
        "id": string
    },
    "current_profile": {
        "product": {
            "id": string,
            "title": string,
            "type": string
        },
        "current_locale": string,
        "subscription": {
            "renew_at": string,
            "product_subscribed": {
                "metadata": any,
                "app_reference": {
                    "id": string
                },
                "is_published": boolean,
                "active": boolean,
                "created_at": {
                    "seconds": number,
                    "nanoseconds": number
                },
                "plan_reference": {
                    "id": string
                },
                "rules": {
                    "export_pdf_low": boolean,
                    "image_upload": boolean,
                    "create_document": boolean,
                    "export_gif": boolean,
                    "document_publish_online": boolean,
                    "export_pdf_medium": boolean,
                    "export_video": boolean,
                    "remove_bg": boolean,
                    "export_gif_count": number,
                    "export_pdf_count": number,
                    "remove_bg_count": number,
                    "use_template_premium_count": number,
                    "icon_stock": boolean,
                    "export_png_medium": boolean,
                    "export_video_count": number,
                    "image_stock": boolean,
                    "export_png_high": boolean,
                    "export_with_watermark": boolean,
                    "export_png_low": boolean,
                    "export_pdf_high": boolean,
                    "font_premium": boolean,
                    "use_template_premium": boolean,
                    "shape_stock": boolean,
                    "upload_font": boolean,
                    "export_png_count": number,
                    "create_document_count": number
                },
                "hotmart_product_id": any,
                "descriptor": {
                    "en-US": string,
                    "pt-BR": string
                },
                "titles": {
                    "en-US": string,
                    "pt-BR": string
                },
                "is_default": boolean,
                "locale": string[],
                "gateway_product_id": any,
                "is_deleted": boolean,
                "payment_required": boolean,
                "updated_at": {
                    "seconds": number,
                    "nanoseconds": number
                },
                "sortment_descriptor": {
                    "en-US": string,
                    "pt-BR": string
                },
                "is_free": boolean,
                "team_members": number,
                "id": string,
                "from_hotmart": boolean,
                "gateway_name": any
            },
            "payment_status": string,
            "active": boolean,
            "created_at": string,
            "id": string,
            "is_trial": boolean,
            "gateway": {
                "product": {
                    "amount": any,
                    "usage_type": any,
                    "product_id": any,
                    "currency": any,
                    "title": {
                        "en-US": string,
                        "pt-BR": string
                    }
                },
                "interval": any,
                "gateway_id": string
            },
            "limits": {
                "export_pdf_low": boolean,
                "image_upload": boolean,
                "create_document": boolean,
                "export_gif": boolean,
                "document_publish_online": boolean,
                "export_pdf_medium": boolean,
                "export_video": boolean,
                "remove_bg": boolean,
                "export_gif_count": number,
                "export_pdf_count": number,
                "remove_bg_count": number,
                "use_template_premium_count": number,
                "icon_stock": boolean,
                "export_png_medium": boolean,
                "export_video_count": number,
                "image_stock": boolean,
                "export_png_high": boolean,
                "export_with_watermark": boolean,
                "export_png_low": boolean,
                "export_pdf_high": boolean,
                "font_premium": boolean,
                "use_template_premium": boolean,
                "shape_stock": boolean,
                "upload_font": boolean,
                "export_png_count": number,
                "create_document_count": number
            }
        }
    },
    "subscription_status": string,
    "profiles": {
        "product": {
            "id": string,
            "title": string,
            "type": string
        },
        "current_locale": string,
        "subscription": {
            "renew_at": string,
            "product_subscribed": {
                "metadata": any,
                "app_reference": {
                    "id": string
                },
                "is_published": boolean,
                "active": boolean,
                "created_at": {
                    "seconds": number,
                    "nanoseconds": number
                },
                "rules": {
                    "export_pdf_low": boolean,
                    "image_upload": boolean,
                    "create_document": boolean,
                    "export_gif": boolean,
                    "document_publish_online": boolean,
                    "export_pdf_medium": boolean,
                    "export_video": boolean,
                    "remove_bg": boolean,
                    "export_pdf_count": number,
                    "export_gif_count": number,
                    "remove_bg_count": number,
                    "use_template_premium_count": number,
                    "icon_stock": boolean,
                    "export_png_medium": boolean,
                    "image_stock": boolean,
                    "export_video_count": number,
                    "export_with_watermark": boolean,
                    "export_png_high": boolean,
                    "export_png_low": boolean,
                    "export_pdf_high": boolean,
                    "font_premium": boolean,
                    "use_template_premium": boolean,
                    "shape_stock": boolean,
                    "upload_font": boolean,
                    "export_png_count": number,
                    "create_document_count": number
                },
                "plan_reference": {
                    "id": string
                },
                "titles": {
                    "en-US": string,
                    "pt-BR": string
                },
                "descriptor": {
                    "en-US": string,
                    "pt-BR": string
                },
                "hotmart_product_id": any,
                "locale": string [],
                "is_default": boolean,
                "gateway_product_id": any,
                "is_deleted": boolean,
                "payment_required": boolean,
                "updated_at": {
                    "seconds": number,
                    "nanoseconds": number
                },
                "sortment_descriptor": {
                    "en-US": string,
                    "pt-BR": string
                },
                "is_free": boolean,
                "team_members": number,
                "id": string,
                "from_hotmart": boolean,
                "gateway_name": any
            },
            "payment_status": string,
            "active": boolean,
            "created_at": string,
            "id": string,
            "is_trial": boolean,
            "gateway": {
                "product": {
                    "amount": any,
                    "usage_type": any,
                    "product_id": any,
                    "currency": any,
                    "title": {
                        "en-US": string,
                        "pt-BR": string
                    }
                },
                "interval": any,
                "gateway_id": string
            },
            "limits": {
                "export_pdf_low": boolean,
                "image_upload": boolean,
                "create_document": boolean,
                "export_gif": boolean,
                "document_publish_online": boolean,
                "export_pdf_medium": boolean,
                "export_video": boolean,
                "remove_bg": boolean,
                "export_pdf_count": number,
                "export_gif_count": number,
                "remove_bg_count": number,
                "use_template_premium_count": number,
                "icon_stock": boolean,
                "export_png_medium": boolean,
                "image_stock": boolean,
                "export_video_count": number,
                "export_with_watermark": boolean,
                "export_png_high": boolean,
                "export_png_low": boolean,
                "export_pdf_high": boolean,
                "font_premium": boolean,
                "use_template_premium": boolean,
                "shape_stock": boolean,
                "upload_font": boolean,
                "export_png_count": number,
                "create_document_count": number
            }
        }
    }[],
    "subscription_rules": {
        "export_pdf_low": boolean,
        "image_upload": boolean,
        "create_document": boolean,
        "export_gif": boolean,
        "document_publish_online": boolean,
        "export_pdf_medium": boolean,
        "export_video": boolean,
        "remove_bg": boolean,
        "export_gif_count": number,
        "export_pdf_count": number,
        "remove_bg_count": number,
        "use_template_premium_count": number,
        "icon_stock": boolean,
        "export_png_medium": boolean,
        "export_video_count": number,
        "image_stock": boolean,
        "export_png_high": boolean,
        "export_with_watermark": boolean,
        "export_png_low": boolean,
        "export_pdf_high": boolean,
        "font_premium": boolean,
        "use_template_premium": boolean,
        "shape_stock": boolean,
        "upload_font": boolean,
        "export_png_count": number,
        "create_document_count": number
    },
    "subscription_plan_name": string,
    "limits": {
        "export_pdf_low": boolean,
        "image_upload": boolean,
        "create_document": boolean,
        "export_gif": boolean,
        "document_publish_online": boolean,
        "export_pdf_medium": boolean,
        "export_video": boolean,
        "remove_bg": boolean,
        "export_gif_count": number,
        "export_pdf_count": number,
        "remove_bg_count": number,
        "use_template_premium_count": number,
        "icon_stock": boolean,
        "export_png_medium": boolean,
        "export_video_count": number,
        "image_stock": boolean,
        "export_png_high": boolean,
        "export_with_watermark": boolean,
        "export_png_low": boolean,
        "export_pdf_high": boolean,
        "font_premium": boolean,
        "use_template_premium": boolean,
        "shape_stock": boolean,
        "upload_font": boolean,
        "export_png_count": number,
        "create_document_count": number
    },
    "current_locale": {
        "fbvZngcBbaFZeUK8h0il": string
    },
    "firebase_token": string
    "access_token": string
    "refresh_token": string
}