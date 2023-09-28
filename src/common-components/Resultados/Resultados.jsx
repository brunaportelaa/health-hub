import ActiveTag from '../ActiveTag';
import { Card } from '../Card'
import './Resultados.css'

const ResultsPage = () => {

    const prontuarios = [
        {
            title: 'Dermatite Atópica',
            date: '10/03/2023',
            ativo: true,
        },
        {
            title: 'Lesão do flexor superficial dos dedos',
            date: '12/08/2022',
            ativo: false,
        },
        {
            title: 'Dermatite Atópica',
            date: '10/03/2023',
            ativo: false,
        },
        {
            title: 'Dermatite Atópica',
            date: '10/03/2023',
            ativo: true,
        },
        {
            title: 'Lesão do flexor superficial dos dedos',
            date: '12/08/2022',
            ativo: false,
        },
        {
            title: 'Dermatite Atópica',
            date: '10/03/2023',
            ativo: false,
        },
    ]

    return (
        <div className='container'>
            <div>
                <h1 className='page-title'>Resultados</h1>
                <p className='paragraph'>Pesquisando por XXX.XXX.XXX-XX</p>
            </div>
            <div className='prontuarios-container'>
            {
                prontuarios.map(prontuario => (
                    <Card>
                    <h3>{prontuario.title}</h3>
                    <p>{prontuario.date}</p>
                    <ActiveTag color={prontuario.ativo ? '#00D6AC' : '#606060'} content={prontuario.ativo ? 'ATIVO' : 'INATIVO'}/>
                    </Card>
                ))
            }
            </div>
        </div>
    )
}

export default ResultsPage;