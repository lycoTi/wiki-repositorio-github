import styled from "styled-components";

export const ItemContainer = styled.div`
   width: 80%;

   animation: .85s ease-out 0ms 1 slideInFromLeft;

   @keyframes slideInFromLeft {
      0% {
         transform: translateX(-10%);
         opacity: 0;
      }
      
      100% {
         transform: translateX(0);
      }
   }
   
   h3 {
      font-size: 32px;
      color: #FAFAFA;
   }

   P {
      font-size: 16px;
      color: #FAFAFA60;
      margin-bottom: 20px ;
   }

   a.remover {
      color: #aa0000;
   }

   hr {
      border:1px solid #FAFAFA00;
      border-top: 1px solid #FAFAFA60;
      margin: 20px 0;
   }
`