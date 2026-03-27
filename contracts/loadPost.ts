import type { PostCategoryInput } from "@shared/domain/postCategory.ts"
import type { ErrorResponse } from "@shared/contracts/postErrorCodes.ts"

export type PostDetails = {
  id: string
  post_type: PostCategoryInput
  title: string
  preview: string
  slug: string
  banner_path: string
  banner_url: string
  content_markdown: string
  image_paths: string[]
}

export type LoadPostSuccessResponse = {
  success: true
  data: PostDetails
}

export type LoadPostErrorResponse = ErrorResponse

export type LoadPostResponse = LoadPostSuccessResponse | LoadPostErrorResponse
