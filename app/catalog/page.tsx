import { Suspense } from "react";
import Catalog from "./ClientCatalog";
import Container from "../../components/Container/Container";

export default function Page() {
  return (
    <Container>
      <Suspense fallback={<div>Loading catalog...</div>}>
        <Catalog />
      </Suspense>
    </Container>
  );
}
