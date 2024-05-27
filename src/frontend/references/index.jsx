import React from 'react'
import { Container } from 'react-bootstrap'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'
import CustomTitle from '../../components/common/CustomTitle'

const ReferencesPage = () => {
  return (
    <>
      <CustomBreadcrumb title="References" subtitle="References" />
      <Container>
        <div className="references-page">
          <div className="references-page__content">
            <CustomTitle title="references" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              iste aliquid nobis explicabo, non rem incidunt quisquam sint saepe
              dolor nesciunt, soluta voluptatum exercitationem! Exercitationem
              autem optio odit. Eum facilis quasi iste esse dolorum maiores
              atque amet veritatis doloremque saepe, necessitatibus vero
              exercitationem explicabo id, ratione dolores distinctio adipisci!
              Cum eligendi maiores saepe quae nisi obcaecati beatae ex sunt
              aliquam debitis officia ab expedita, suscipit corporis rerum?
              Maxime aspernatur est voluptatum facilis nesciunt sed, repudiandae
              quasi praesentium dolorum natus nemo debitis aperiam quidem rem
              delectus iusto asperiores ipsam repellendus soluta quas!
              Perspiciatis beatae architecto quidem vitae cupiditate numquam
              enim minima.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              debitis eum sit harum illo ab quia natus voluptate reprehenderit
              omnis, expedita ea architecto quidem modi beatae magnam corporis
              assumenda? Est.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ReferencesPage
