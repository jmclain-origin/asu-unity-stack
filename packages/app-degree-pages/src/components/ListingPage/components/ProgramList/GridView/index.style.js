// @ts-check

import styled from "styled-components";

const SectionCard = styled.section`
  margin: auto;
  gap: 1rem;
  .card-link {
    order: 1;
  }

  .card-button {
    order: 2;
    & * {
      font-size: 70%;
    }
  }
`;

export { SectionCard };
