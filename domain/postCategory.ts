export const POST_CATEGORIES = ["BLOG", "PROMOCAO"] as const

export type PostCategory = (typeof POST_CATEGORIES)[number]
export type PostCategoryInput = PostCategory | "POST"

export function isPostCategory(value: string): value is PostCategory {
  return POST_CATEGORIES.includes(value as PostCategory)
}

export function normalizePostCategory(rawCategory: string): PostCategory | null {
  const normalized = rawCategory.trim().toUpperCase()
  const mapped = normalized === "POST" ? "BLOG" : normalized

  return isPostCategory(mapped) ? mapped : null
}
