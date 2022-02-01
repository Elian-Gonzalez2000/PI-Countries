import React from 'react';

const ActivityCard = (activity) => {

    return (
        <div >
            {activity && (
            <div>    
            <p><strong>Actividad: </strong>{activity.name}</p>
            <p><strong>Dificultad: </strong>{activity.difficulty}</p>
            <p><strong>Duracion: </strong>{activity.duration}</p>
            <p><strong>Temporada: </strong>{activity.season}</p>
            </div>
            ) }
            
        </div>
    );
};

export default ActivityCard;