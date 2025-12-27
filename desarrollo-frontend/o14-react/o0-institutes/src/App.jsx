import './App.css'
import Card from './Card'

function App() {
  return (
    <div className="card-container">
      <Card
        title="Idat"
        description="Instituto Idat con más de 35 años activando el potencial de los jóvenes. Entra y conoce nuestras carreras profesionales, Escuela de Coding y cursos virtuales."
      />
      <Card
        title="Certus"
        description="¡Carreras con futuro laboral! Encuentra las carreras técnicas, certificaciones y diplomas con más alta demanda en el mercado laboral. ¡Ingresa y conócenos!"
      />
      <Card
        title="Tecsup"
        description="Tecsup es una organización educativa privada sin fines de lucro, dedicada a formar y capacitar profesionales, así como brindar servicios de apoyo a los jóvenes y adultos que deseen emprender en el sector de la tecnología."
      />
    </div>
  )
}

export default App
