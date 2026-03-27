export const POST_SUCCESS_CODES = {
  POST_CREATED: "POST_CREATED",
  POST_UPDATED: "POST_UPDATED",
  POST_DELETED: "POST_DELETED",
} as const

export type PostSuccessCode = (typeof POST_SUCCESS_CODES)[keyof typeof POST_SUCCESS_CODES]
