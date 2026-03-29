export const DEFAULT_POST_IMAGES_BUCKET = "post-images"

export function resolvePostImagesBucket(bucketFromEnv?: string | null): string {
	const normalized = bucketFromEnv?.trim()

	if (!normalized) {
		return DEFAULT_POST_IMAGES_BUCKET
	}

	return normalized
}

export const POST_IMAGES_BUCKET = resolvePostImagesBucket()
