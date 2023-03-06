//@ts-ignore
import default_profile from "../assets/images/logo-example.png";
import { format, parseISO, isDate } from "date-fns";
import * as yup from "yup";
import pt from "date-fns/locale/pt";
import { Linking } from "react-native";

const hasContent = (value: string) => {
  if (value !== "") {
    return false;
  } else {
    return true;
  }
};

const percentCalc = (current: number, max: number) => {
  return (current + 1) / max;
};

const checkUrl = (url: string) => {
  if (url) {
    if (
      url.indexOf("images") > -1 ||
      url.indexOf("ImageManipulator") > -1 ||
      url.indexOf("ImagePicker") > -1
    ) {
      return { uri: url };
    }
    return { uri: url };
  } else {
    return default_profile;
  }
};

// EXIBE OS ITEMS SELECIONADOS DO SELECT MULTIPLE
const wasSelected = (data, selected) => {
  if (selected?.findIndex((i) => i?.id === data?.id) !== -1) {
    return true;
  } else {
    return false;
  }
};

// FORMATAR LISTA COM MAIS DE UMA COLUNA NO FLATLIST
const formatOddList = (data, columns) => {
  const totalRows = Math.floor(data?.length / columns);
  let totalLastRow = data?.length - totalRows * columns;

  while (totalLastRow !== 0 && totalLastRow !== columns) {
    data?.push({ key: "blank", empty: true });
    totalLastRow++;
  }

  return data;
};

const gotToLink = (url: string) => {
  Linking.openURL(url);
};

const goToWhatsApp = (text: string, phone: string) => {
  Linking.canOpenURL(`whatsapp://send?text=${text}`).then((supported) => {
    if (supported) {
      return Linking.openURL(`whatsapp://send?phone=${phone}&text=${text}`);
    } else {
      return Linking.openURL(
        `https://api.whatsapp.com/send?phone=${phone}&text=${text}`
      );
    }
  });
};

// Formatar Moeda
const formatNumber = (
  amount,
  decimalCount = 2,
  decimal = ",",
  thousands = "."
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    //@ts-ignore
    return (
      negativeSign +
      (j ? i.substring(0, j) + thousands : "") +
      i.substring(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
};

//ORDENAR LISTA
const handleOrderCoinList = (array, action) => {
  // setHasOrder(true)
  let newList = [...array];
  newList.sort((current, next) =>
    current.name > next.name ? 1 : next.name > current.name ? -1 : 0
  );
  action(newList);
};

const shortenText = (max: number, text: string) => {
  if (text?.length > max) {
    return (text = text?.substring(0, max) + "...");
  } else {
    return text;
  }
};

const formatDate = (date: Date | string, params?: string) => {
  if (date instanceof Date)
    return format(date, "dd/MM/yyyy" || params, { locale: pt });
  else return date;
};

const populateMap = (prev, next) => {
  const joinArray = [...prev, ...next];
  // console.log('JOINARRAY: ', joinArray)
  const map = new Map();
  for (const item of joinArray) {
    map.set(item.id, item);
  }

  // console.log('MAP: ', [...map.values()])

  return [...map.values()];
};

const currentFullYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

export {
  hasContent,
  currentFullYear,
  percentCalc,
  checkUrl,
  gotToLink,
  goToWhatsApp,
  wasSelected,
  formatOddList,
  formatDate,
  formatNumber,
  populateMap,
};
