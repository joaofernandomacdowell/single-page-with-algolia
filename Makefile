YARN ?= $(shell which yarn)
NPM ?= $(shell which npm)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

# See https://gist.github.com/prwhite/8168133#comment-1313022
help:		## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

setup:		## Instala todas as dependências necessárias para rodar o projeto
	$(PKG_MANAGER) install

run:		## Executa a aplicação localmente
	$(PKG_MANAGER) start

setup-run:	## Instala as dependências e em seguida executa a aplicação
	make setup
	make run

test:		## Executa testes unitários na aplicação localmente
	$(PKG_MANAGER) test

lint:		## Executa eslint
	$(PKG_MANAGER) lint

build:		## Faz o build da aplicação
	$(PKG_MANAGER) build


