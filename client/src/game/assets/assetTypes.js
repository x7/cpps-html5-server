export const ASSET_TYPES = Object.freeze({
    "FONT": "FONT",
    "BITMAP_FONT": "BITMAP_FONT",
    "JSON": "JSON",
    "AUDIO": "AUDIO",
    "PACK": "PACK",
    "IMAGE": "IMAGE"
});

export const ALLOWED_ASSET_EXTENSIONS = Object.freeze({
    "FONT": ["woff2", "woff", "tff", "otf", "eot", "svg"],
    "BITMAP_FONT": ["png", "jpeg", "jpeg", "xml", "json", "fnt"],
    "JSON": ["json"],
    "AUDIO": ["mp3", "ogg", "wav", "m4a", "webm", "opus", "aac", "flac"],
    "PACK": ["json"],
    "IMAGE": ["png", "jpg", "jpeg", "gif", "bmp", "webp", "svg"]
});