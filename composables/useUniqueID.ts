let UUID: number = 0

export default function useUniqueID () {
  const getID = (): number => {
    UUID++
    return UUID
  }

  return {
    getID
  }
}