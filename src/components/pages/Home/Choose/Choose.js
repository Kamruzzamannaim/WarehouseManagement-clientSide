import Accordion from 'react-bootstrap/Accordion';
const Choose = () => {
    return (
        <div> <h1 className='text-center my-5'>Why should you Choose us?</h1>
           
            <div className="accordion mb-3">
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Quality Commitment</Accordion.Header>
    <Accordion.Body className='bg-primary'>
      Quality is our first priority. We value your comfortzone. Our vehicle will make sure to give you full satisfiction.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>We are always improving</Accordion.Header>
    <Accordion.Body className='bg-primary'>
     We are adding many features to make you more comfortable. BMW engines are breaking its past record.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
        </div>
    );
};

export default Choose;