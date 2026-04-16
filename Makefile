.PHONY: start-dev
start-dev:
	docker compose --profile dev up --build -d

.PHONY: start-prod
start-prod:
	docker compose up --build -d

.PHONY: stop-dev
stop-dev:
	docker compose --profile dev down

.PHONY: stop-prod
stop-prod:
	docker compose down


 