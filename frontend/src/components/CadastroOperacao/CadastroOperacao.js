import React,{useContext} from "react";
import "./CadastroOperacao.css";
import {Form, Button, Container, Row, Col, Table, InputGroup} from "react-bootstrap"
import PainelSombreado from "../PainelSombreado/PainelSombreado"
import { ChavesContext } from "../../context/ChavesProvider";



const CadastroOperacao = ({props}) => {
    const {onChaveSubmit} = useContext(ChavesContext);
    return(
        <body>
            <div className="conteudo">
                <Container>
                    <Row>
                        <Col >
                            <PainelSombreado elemento={
                                 <div>
                                     <h4 className="text-center text-secondary  mb-4">Cadastro de Chave</h4>
                                    <Form onSubmit={onChaveSubmit}>
                                        <Row className="mb-3">
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formTipoDocumentoCad">
                                                    <Form.Label>Tipo do Documento</Form.Label>
                                                    <Form.Select>
                                                        <option value={1}>CNH</option>
                                                        <option value={2}>RG</option>
                                                        <option value={3}>PASSAPORTE</option>
                                                        <option value={4}>RNE</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>      
                                            <Col xs={2}>
                                                <Form.Group controlId="formNumeroDocumentoCad">
                                                    <Form.Label>Número do Documento</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: 00.000.000-0" maxLength = "20"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={5}>
                                                <Form.Group controlId="formLogradouroCad">
                                                    <Form.Label>Previsão de Entrega</Form.Label>
                                                    <Form.Control required type="date" placeholder="Ex: Rua das Maravilhas" maxLength = "100"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="formBairroCad">
                                                    <Form.Label>Bairro</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: Jardim São Luiz" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={2}>
                                                <Form.Group controlId="formCidadeCad">
                                                    <Form.Label>Cidade</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: Americana" maxLength = "30"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={1}>
                                                <Form.Group controlId="formEstadoEstadoCad">
                                                    <Form.Label>Estado</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: SP" maxLength = "15"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col xs={3}>
                                                <Form.Group controlId="formNumeroCad">
                                                    <Form.Label>Número</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: 1234" maxLength = "11"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formComplementoCad">
                                                    <Form.Label>Complemento</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: Apto 25 - Bloco 43" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formPontoReferenciaCad">
                                                    <Form.Label>Ponto de Referência</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: Ao lado do supermercado" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formFinalidadeImovelCad">
                                                    <Form.Label>Finalidade do Imóvel</Form.Label>
                                                    <Form.Select>
                                                        <option value={1}>Locação</option>
                                                        <option value={2}>Venda</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>                                          
                                        </Row>
                                        <Row className="my-3">
                                            <Col xs={3}>
                                                <Form.Group as={Col} controlId="formCategoriaImovelCad">
                                                    <Form.Label>Categoria do Imóvel</Form.Label>
                                                    <Form.Select>
                                                        <option value={1}>CASA RESIDENCIAL</option>
                                                        <option value={2}>APARTAMENTO</option>
                                                        <option value={3}>SALÃO COMERCIAL</option>
                                                        <option value={4}>SALÃO INDUSTRIAL</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formProprietarioCad">
                                                    <Form.Label>Proprietário</Form.Label>
                                                    <Form.Control required type="text" placeholder="Ex: João da Silva Santos" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col xs={3}>
                                                <Form.Group controlId="formContatoCad">
                                                    <Form.Label>Contato</Form.Label>
                                                    <Form.Control required type="number" placeholder="Ex: 19995965421" maxLength = "50"></Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end me-4">
                                            {/* <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="outline-secondary" type="submit">Cancelar</Button>
                                                </Row>
                                            </Col> */}
                                            <Col xs={2}>
                                                <Row className="ms-3">
                                                    <Button variant="primary" type="submit">Salvar Registro</Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Form>
                                 </div>
                            }></PainelSombreado>
                        </Col>
                    </Row>
                </Container>
            </div>
        </body>
    )
}
export default CadastroOperacao;