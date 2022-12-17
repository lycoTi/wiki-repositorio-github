import styled from "styled-components";

export const InputContainer = styled.div`
   
   border-radius: 20px;

   height: 62px;
   width: 80%;
   margin: 20px;

   input {
      background: transparent;
      outline: 1px solid #FAFAFA;
      border: 0;
      width: 95%;
      height: 62px;
      padding: 0 10px;
      color: #FFFFFF;
      font-size: 20px;
      border-radius: inherit;
      transform: scale(1);
      transition: all 200ms ease-in-out;


      
      &:focus-visible {
         outline: 2px solid #0066aacc;
         box-shadow: 0 0 10px 0px #ffffff55;
         border: none;
         background-image: radial-gradient(#2a2f37 10%, #22272e);
         transition: all 200ms ease-in-out;
         transform: scale(1.03);
      }
      &::selection {
         background-color: #444f61;
         color: #444f61;
      }
   }
`
