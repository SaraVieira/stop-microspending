import Vue from 'vue';
import {
  Input,
  Select,
  Option,
  Button,
  Form,
  FormItem,
  Alert,
  Icon,
  Row,
  Col,
  Card,
  Container,
  Header,
  Main,
  Notification
} from 'element-ui';

import locale from 'element-ui/lib/locale/lang/en';

export default () => {
  Vue.use(Input, { locale });
  Vue.use(Select, { locale });
  Vue.use(Option, { locale });
  Vue.use(Button, { locale });
  Vue.use(Form, { locale });
  Vue.use(FormItem, { locale });
  Vue.use(Alert, { locale });
  Vue.use(Icon, { locale });
  Vue.use(Row, { locale });
  Vue.use(Col, { locale });
  Vue.use(Card, { locale });
  Vue.use(Container, { locale });
  Vue.use(Header, { locale });
  Vue.use(Main, { locale });

  Vue.prototype.$notify = Notification;
};
