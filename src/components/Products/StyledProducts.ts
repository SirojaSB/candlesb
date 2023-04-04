import styled from "styled-components";
import {SectionContainer} from "../SectionContainer";

export const StyledProducts = styled(SectionContainer)`
  padding-top: 90px;
  padding-bottom: 125px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 57.6px;
    margin-bottom: 15px;
  }

  .subtitle {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 27.6px;
    margin-bottom: 60px;
  }
`

export const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 255px);
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
`
