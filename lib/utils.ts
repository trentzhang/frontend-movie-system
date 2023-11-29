function checkURLIsImage(url: string) {
  if (url) {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
  } else {
    return false;
  }
}

export function coverURL(url: string) {
  return checkURLIsImage(url)
    ? url
    : "http://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg";
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function isIndexInRange(
  index: number,
  activeIndex: number,
  k: number,
  arrayLength: number
) {
  // Calculate the lower and upper bounds for the range
  const lowerBound = (activeIndex - k + arrayLength) % arrayLength;
  const upperBound = (activeIndex + k) % arrayLength;

  // Check if the index is within the range or wraps around
  if (lowerBound <= upperBound) {
    return index >= lowerBound && index <= upperBound;
  } else {
    return index >= lowerBound || index <= upperBound;
  }
}

export function wrapAroundSlice<T>(
  array: T[],
  start: number,
  end: number
): T[] {
  const length = array.length;

  // Ensure start and end are within valid bounds
  start = ((start % length) + length) % length;
  end = ((end % length) + length) % length;

  if (start < end) {
    // Case 1: Non-wrapping slice
    return array.slice(start, end);
  } else {
    // Case 2: Wrapping slice
    const slicedArray = array.slice(start).concat(array.slice(0, end));
    return slicedArray;
  }
}
