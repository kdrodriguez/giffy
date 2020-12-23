import React, { Suspense } from "react";
import useNearScreen from "hooks/useNearScreen";

// Descarga el componente (TrendingSearches) solo cuando lo necesitamos
const TrendingSearches = React.lazy(() =>
  import("components/TrendingSearches")
);

export default function LazyTranding() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: "300px" });
  return (
    <Suspense fallback={"Estoy cargando..."}>
      <div ref={fromRef}>
        {isNearScreen ? <TrendingSearches /> : "Estoy cargando..."}
      </div>
    </Suspense>
  );
}
