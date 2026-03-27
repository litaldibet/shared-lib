import type { PostCategoryInput } from "@shared/domain/postCategory.ts"
import type { ErrorResponse } from "@shared/contracts/postErrorCodes.ts"

export type PostCard = {
  id: string
  title: string
  slug: string
  preview: string
  post_type: PostCategoryInput
  banner_url: string
}

export type LoadCardsSuccessResponse = {
  success: true
  data: PostCard[]
}

export type LoadCardsErrorResponse = ErrorResponse

export type LoadCardsResponse = LoadCardsSuccessResponse | LoadCardsErrorResponse
