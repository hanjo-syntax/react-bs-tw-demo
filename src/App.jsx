import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Rocket, Palette, Box } from 'lucide-react';
import Navigation from './components/Navigation';
import DemoModal from './components/DemoModal';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="tw-min-h-screen tw-bg-slate-50 tw-flex tw-flex-col">
      {/* 1. Navigation */}
      <Navigation />

      {/* 2. Main Content */}
      <main className="tw-flex-1 tw-py-12">
        <Container>
          <div className="tw-text-center tw-max-w-2xl tw-mx-auto tw-mb-12">
            <h1 className="tw-text-4xl tw-font-extrabold tw-text-slate-900 tw-tracking-tight tw-mb-4">
              React + Bootstrap + Tailwind
            </h1>
            <p className="tw-text-lg tw-text-slate-600">
              Bootstrap-Komponenten mit Utilities von Tailwind (mit <code className="tw-text-pink-600 tw-font-mono">tw-</code> Präfix) und Lucide Icons.
            </p>
            <div className="tw-mt-6 tw-flex tw-justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => setShowModal(true)}
                className="tw-flex tw-items-center tw-gap-2 tw-shadow-md hover:tw-scale-105 tw-transition-transform"
              >
                <Rocket size={20} /> Modal öffnen
              </Button>
            </div>
          </div>

          {/* 3. Cards Grid */}
          <Row className="g-4">
            <Col md={4}>
              <Card className="tw-h-full tw-border-0 tw-shadow-sm hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-rounded-2xl">
                <Card.Body className="tw-p-6 tw-flex tw-flex-col">
                  <div className="tw-w-12 tw-h-12 tw-bg-cyan-100 tw-text-cyan-700 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                    <Box size={24} />
                  </div>
                  <Card.Title className="tw-font-bold tw-text-slate-800 tw-text-xl">
                    React-Bootstrap
                  </Card.Title>
                  <Card.Text className="tw-text-slate-600 tw-text-sm tw-flex-1 tw-mt-2">
                    Lorem Ipsum dolor sit amet
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="tw-h-full tw-border-0 tw-shadow-sm hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-rounded-2xl">
                <Card.Body className="tw-p-6 tw-flex tw-flex-col">
                  <div className="tw-w-12 tw-h-12 tw-bg-sky-100 tw-text-sky-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                    <Palette size={24} />
                  </div>
                  <Card.Title className="tw-font-bold tw-text-slate-800 tw-text-xl">
                    Tailwind (tw-)
                  </Card.Title>
                  <Card.Text className="tw-text-slate-600 tw-text-sm tw-flex-1 tw-mt-2">
                    <code className="tw-font-mono tw-text-sky-700">Kontrolle über Abstände, Typografie, Schatten etc.</code>.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="tw-h-full tw-border-0 tw-shadow-sm hover:tw-shadow-xl tw-transition-all tw-duration-300 tw-rounded-2xl">
                <Card.Body className="tw-p-6 tw-flex tw-flex-col">
                  <div className="tw-w-12 tw-h-12 tw-bg-indigo-100 tw-text-indigo-600 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-4">
                    <Rocket size={24} />
                  </div>
                  <Card.Title className="tw-font-bold tw-text-slate-800 tw-text-xl">
                    Lucide React
                  </Card.Title>
                  <Card.Text className="tw-text-slate-600 tw-text-sm tw-flex-1 tw-mt-2">
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      {/* 4. Modal */}
      <DemoModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}