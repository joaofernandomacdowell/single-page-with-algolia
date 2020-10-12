# Single Page

Esse projeto foi criado através do [Create React App](https://github.com/facebook/create-react-app).

Esse projeto foi desenvolvido a partir da versão 12.* do Node.js


## Para executar o projeto, antes é necessário

1- Criar um arquivo `.env` na raíz do projeto

2- Adicionar as variáveis de ambiente: `REACT_APP_API_KEY` & `REACT_APP_ID`:

```
REACT_APP_API_KEY=<your_api_key>
REACT_APP_ID=<your_app_id>
```

## Scripts disponíveis

### Instala as dependências e roda a aplicação em modo desenvolvimento
```
$ make setup-run
```

### Para apenas instalar as dependências necessárias para rodar a aplicação
```
$ make setup
```


### Para apenas executar a aplicação em modo desenvolvimento<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser

```
$ make run
```
Essa página irá fazer refresh automático ao aplicar mudanças no código


### Executa os testes unitários

```
$ make test
```


### Faz o build da aplicação para produção no diretório `build`<br/>

```
$ make build
```

Faz o bundle do React em modo produção e otimiza o build para melhor performance.<br/>
O build é minificado e os nomes dos arquivos incluem hashes<br/>


## Executar servidor estático em modo produção e verificar performance

1- Roda a aplicação em [http://localhost:5000](http://localhost:5000) com o build otimizado para performance

```
$ npx serve -s build
```

2- Executa o lighthouse

```
$ npx lighthouse --view http://localhost:5000
```