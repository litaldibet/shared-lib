import type { PostCategoryInput } from "@shared/domain/postCategory.ts"
import type { ErrorResponse } from "@shared/contracts/postErrorCodes.ts"
import { isObjectRecord } from "@shared/utils/objectGuards.ts"

export type PostCard = {
  id: string
  title: string
  slug: string
  preview: string
  post_type: PostCategoryInput
  active: boolean
  banner_url: string
}

export type LoadCardsSuccessResponse = {
  success: true
  data: PostCard[]
}

export type LoadCardsErrorResponse = ErrorResponse

export type LoadCardsResponse = LoadCardsSuccessResponse | LoadCardsErrorResponse

export function isPostCard(value: unknown): value is PostCard {
  if (!isObjectRecord(value)) {
    return false
  }

  return (
    typeof value.id === "string" &&
    typeof value.title === "string" &&
    typeof value.slug === "string" &&
    typeof value.preview === "string" &&
    typeof value.post_type === "string" &&
    typeof value.active === "boolean" &&
    typeof value.banner_url === "string"
  )
}

export function isLoadCardsSuccessResponse(data: unknown): data is LoadCardsSuccessResponse {
  if (!isObjectRecord(data) || data.success !== true || !Array.isArray(data.data)) {
    return false
  }

  return data.data.every(isPostCard)
}
