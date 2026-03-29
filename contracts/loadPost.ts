import type { PostCategoryInput } from "@shared/domain/postCategory.ts"
import type { ErrorResponse } from "@shared/contracts/postErrorCodes.ts"
import { hasStringField, isObjectRecord, isStringArray } from "@shared/utils/objectGuards.ts"

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

export function isPostDetails(value: unknown): value is PostDetails {
  if (!isObjectRecord(value)) {
    return false
  }

  return (
    hasStringField(value, "id") &&
    hasStringField(value, "post_type") &&
    hasStringField(value, "title") &&
    hasStringField(value, "preview") &&
    hasStringField(value, "slug") &&
    hasStringField(value, "banner_path") &&
    hasStringField(value, "banner_url") &&
    hasStringField(value, "content_markdown") &&
    isStringArray(value.image_paths)
  )
}

export function isLoadPostSuccessResponse(data: unknown): data is LoadPostSuccessResponse {
  return isObjectRecord(data) && data.success === true && isPostDetails(data.data)
}
