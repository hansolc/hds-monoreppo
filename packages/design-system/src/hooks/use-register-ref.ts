import { RefObject, useEffect, useRef, useMemo } from "react";
import { mergeRefs } from "@/utils/mergeRef";

/**
 * Ref 등록/해제를 자동으로 처리하는 커스텀 훅
 *
 * @description
 * Context에 ref를 자동으로 등록하고 cleanup 시 해제합니다.
 * 외부 ref와 내부 ref를 자동으로 병합하여 반환합니다.
 *
 * @param registerRef - Context에 ref를 등록하는 함수
 * @param unregisterRef - Context에서 ref를 해제하는 함수
 * @param externalRef - 외부에서 전달받은 ref (forwardRef의 ref)
 *
 * @returns 병합된 ref (JSX에 직접 전달 가능)
 *
 * @example
 *
 * const Component = forwardRef((props, ref) => {
 *   const { registerTriggerRef, unregisterTriggerRef } = useContext();
 *
 *   // 이전 방식 (10줄)
 *   // const localRef = useRef(null);
 *   // useEffect(() => { ... }, []);
 *   // return <div ref={mergeRefs(ref, localRef)} />
 *
 *   // 새 방식 (1줄)
 *   const mergedRef = useRegisterRef(registerTriggerRef, unregisterTriggerRef, ref);
 *
 *   return <div ref={mergedRef} />;
 * });
 *  */
function useRegisterRef<T extends HTMLElement = HTMLElement>(
  registerRef: (ref: RefObject<T | null>) => void,
  unregisterRef: (ref: RefObject<T | null>) => void,
  externalRef?: React.ForwardedRef<T>,
): React.RefCallback<T> | null {
  const localRef = useRef<T | null>(null);

  // ref 등록/해제
  useEffect(() => {
    if (localRef.current) {
      registerRef(localRef);
    }

    return () => {
      unregisterRef(localRef);
    };
  }, [registerRef, unregisterRef]);

  // ref 병합 (외부 ref + 내부 ref)
  const mergedRef = useMemo(() => {
    return mergeRefs<T>(externalRef, localRef);
  }, [externalRef]);

  return mergedRef;
}

export default useRegisterRef;
