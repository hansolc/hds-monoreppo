export function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value); // 콜백 ref 처리
      } else if (ref && typeof ref === "object") {
        (ref as React.RefObject<T | null>).current = value; // 객체 ref 처리
      }
    });
  };
}
