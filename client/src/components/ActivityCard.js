import React from "react";
import styled from "styled-components";

const ActivityCardContainer = styled.div`
   text-align: left;
   width: 47%;
   padding: 0 1rem;
`;

const ActivitiesP = styled.p`
   font-size: 1.15rem;
   margin-bottom: 0.5rem;
   letter-spacing: 2px;
`;

const ActivityCard = (activity) => {
   return (
      <>
         {activity && (
            <ActivityCardContainer>
               <ActivitiesP>
                  <strong>Actividad: </strong>
                  {activity.name}
               </ActivitiesP>
               <ActivitiesP>
                  <strong>Dificultad: </strong>
                  {activity.difficulty || "No definida"}
               </ActivitiesP>
               <ActivitiesP>
                  <strong>Duracion: </strong>
                  {activity.duration || "No definida"}
               </ActivitiesP>
               <ActivitiesP>
                  <strong>Temporada: </strong>
                  {activity.season || "No definida"}
               </ActivitiesP>
            </ActivityCardContainer>
         )}
      </>
   );
};

export default ActivityCard;
