import crypto from 'crypto'

export function createHashSignature(hashStr) {
  return crypto
  .createHash('sha256')
  .update(hashStr)
  .digest('base64')
}