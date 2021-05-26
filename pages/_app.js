import { wrapper } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
// import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../public/assets/scss/style.scss";

import { registerClientAction } from "redux/actions/clientInfoActions";

function App({ Component, pageProps }) {
  const dispatch = useDispatch();
  const clientId = useSelector((state) => state.clientInfo.clientId);
  useEffect(() => {
    if (!clientId) dispatch(registerClientAction());
  }, []);

  return (
    <div className="root-next">
      <Head>
        <title>Custom template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/img/favicon.png"
          type="image/png"
        />

        <link rel="shortcut icon" href="assets/images/favicon.ico" />

        <link
          href="/assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />

        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <Component {...pageProps} />

      <script src="/assets/js/jquery.min.js"></script>
      <script src="/assets/js/bootstrap.bundle.min.js"></script>
      <script src="/assets/js/jquery.slimscroll.js"></script>
      <script src="/assets/js/waves.min.js"></script>
      <script src="/assets/js/app.js"></script>
      <script src="/assets/plugins/datatables/jquery.dataTables.min.js"></script>
      <script src="/assets/plugins/datatables/dataTables.bootstrap4.min.js"></script>
      <script src="/assets/plugins/datatables/dataTables.responsive.min.js"></script>
      <script src="/assets/plugins/datatables/responsive.bootstrap4.min.js"></script>
      <script src="/assets/pages/ecommerce.js"></script>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default wrapper.withRedux(App);
