import { isRouteErrorResponse, useRouteError, Link } from "react-router";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export function ErrorBoundary({ error: propError }) {
  const routeError = useRouteError();
  const error = propError || routeError;

  let statusCode = "500";
  let title = "Unexpected Application Error";
  let description = "Something went wrong on our end. Please try again later.";

  if (isRouteErrorResponse(error)) {
    statusCode = String(error.status);
    title = error.statusText || "Route Error";
    description =
      typeof error.data === "string"
        ? error.data
        : error.data?.message ||
          (error.status === 404
            ? "The page you are looking for doesn't exist or has been moved."
            : "An unexpected routing response occurred.");
  } else if (error instanceof Error) {
    description = error.message;
  }

  const isNotFound = statusCode === "404";

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100 px-3"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <Card
        className="border-0 shadow-lg text-center p-4 p-md-5"
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "18px",
        }}
      >
        <Card.Body className="p-0">
          {/* Status Pill Badge */}
          <div className="mb-3">
            <Badge
              pill
              bg={isNotFound ? "primary" : "danger"}
              className="px-3 py-2 text-uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.6px" }}
            >
              {isNotFound ? "Page Not Found" : "System Error"}
            </Badge>
          </div>

          {/* Large Status Code */}
          <h1
            className="fw-bold mb-2 text-dark"
            style={{
              fontSize: "clamp(3.5rem, 8vw, 5rem)",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            {statusCode}
          </h1>

          {/* Title */}
          <Card.Title as="h2" className="h4 fw-semibold text-secondary mb-3">
            {title}
          </Card.Title>

          {/* Error Description */}
          <Card.Text className="text-muted mb-4 px-2" style={{ fontSize: "15px", lineHeight: "1.6" }}>
            {description}
          </Card.Text>

          {/* Actions */}
          <Stack
            direction="horizontal"
            gap={2}
            className="justify-content-center flex-column flex-sm-row"
          >
            <Button
              as={Link}
              to="/"
              variant="primary"
              className="px-4 py-2 fw-medium shadow-sm"
              style={{ borderRadius: "8px" }}
            >
              Back to Home
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => window.location.reload()}
              className="px-4 py-2 fw-medium"
              style={{ borderRadius: "8px" }}
            >
              Try Again
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}