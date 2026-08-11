# A3 Informática

Landing page profissional da A3 Informática, preparada para GitHub e Vercel.

## Recursos

- Layout responsivo para desktop, iOS e Android
- Diagnóstico Rápido antes do direcionamento ao WhatsApp
- Fluxo de A3 Delivery
- Animações SVG leves e respeito a `prefers-reduced-motion`
- SEO local, metadados, Open Graph, Schema.org, sitemap e robots
- FAQ, serviços multimarcas e área do desenvolvedor FlexMind

## Executar localmente

Requisitos: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Publicar no GitHub

1. Extraia este pacote.
2. Envie o conteúdo da pasta para a raiz do repositório.
3. Não envie a pasta `.next` nem `node_modules`.

## Publicar na Vercel

1. Na Vercel, clique em **Add New > Project**.
2. Importe o repositório do GitHub.
3. O framework será detectado automaticamente como Next.js.
4. Em **Environment Variables**, adicione:

```text
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

5. Faça o deploy. Se ainda não possuir domínio próprio, use temporariamente a URL final fornecida pela Vercel e atualize essa variável depois.

## Comandos

```bash
npm run dev
npm run lint
npm run build
npm start
```

## Contatos configurados

- A3 Informática: WhatsApp `(91) 98013-7643`
- FlexMind: WhatsApp `(84) 98600-5544`
- Site da FlexMind: `https://www.flexmind.tec.br`
