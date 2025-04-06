import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export function NotFoundPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  const decreaseSeconds = useCallback(() => {
    setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1_000);
  }, [setSeconds]);

  useEffect(() => {
    decreaseSeconds();

    if (seconds < 1) {
      navigate('/', { replace: true });
    }
  }, [seconds, navigate, decreaseSeconds]);

  return (
    <div>
      <h1>페이지를 찾을 수 없습니다.</h1>
      <div>{seconds}초 후 메인페이지로 이동합니다.</div>
    </div>
  );
}
