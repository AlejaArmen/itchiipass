
const escolarEvents = [
    {
        title: 'Residencias estudiantiles',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 2
    },
    {
        title: 'Danza folclórica',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 3
    },
    {
        title: 'Taller de Next.js',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 4
    },
    {
        title: 'Conferecia de CV',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 5
    },
    {
        title: 'Dia de muertos',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 6
    },
    {
        title: 'Ponte la camiseta',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 7
    },
    {
        title: 'Representativo de teatro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        date: '2021-10-09',
        time: '11:00',
        place: 'Aula 1',
        image: 'https://picsum.photos/200/300',
        id: 8
    },
]

export default function CardSlides(){
    return(
        <>
            <h2>Evento</h2>
            <div>
                {
                    escolarEvents.map((evento, index) => {
                        return(
                            <div key={index}>
                                <h3>{evento.title}</h3>
                                <p>{evento.description}</p>
                                <p>{evento.date}</p>
                                <p>{evento.time}</p>
                                <p>{evento.place}</p>
                                <img src={evento.image} alt={evento.title}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )}