import { Col, Container, Row } from "react-bootstrap";

export function Body() {
    return(
        <Container>
            <Row>
                <Col lg={4}>
                    <div class="p-3  bg-success text-white">
                    <h1>Our Warehouses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex saepe aspernatur fuga minima itaque tempora illum dolor ipsum aliquam, error, illo voluptatum. Cum maiores ea sequi recusandae amet quos! Saepe atque sint, impedit dolore, voluptatem quod officia veniam soluta tenetur inventore illum iure quas voluptatum repudiandae laborum eum similique dolorem.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div class="p-3  bg-light text-dark">
                    <h1>Weather</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur aperiam, hic assumenda temporibus cupiditate consectetur exercitationem illo quisquam sint odio iusto minus molestias doloribus quo consequatur maiores excepturi nihil dolores deserunt sapiente quaerat saepe. At, porro cum, delectus eos quis praesentium natus vitae assumenda tempore omnis aperiam nobis! Ab, ipsum?</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div class="p-3  bg-info text-white">
                    <h1>Top News</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci quas incidunt id voluptas. Laudantium modi, a adipisci reprehenderit veniam at ab! Unde quidem ipsa temporibus optio fugiat quam, natus delectus cumque consectetur eos incidunt rem, esse deleniti enim commodi fugit inventore deserunt quas hic magni fuga facere velit pariatur. Natus!</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}