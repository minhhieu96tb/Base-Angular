import 'moment/locale/pt-br';
import { AbstractControl, UntypedFormControl, ValidatorFn } from '@angular/forms';
import {jwtDecode} from 'jwt-decode';
import * as CryptoJS from "crypto-js";

export let testEmailAddress = (emailToTest: any) => {
  var at = emailToTest.indexOf('@');
  var dot = emailToTest.lastIndexOf('.');
  return (
    emailToTest.length > 0 &&
    at > 0 &&
    dot > at + 1 &&
    dot < emailToTest.length &&
    emailToTest[at + 1] !== '.' &&
    emailToTest.indexOf(' ') === -1 &&
    emailToTest.indexOf('..') === -1
  );
};
export let testCurrency = (value: string) => {
  const listCharacter = '.,0123456789';
  for (let i = 0; i < value.length; i++) {
    if (!listCharacter.includes(value[i])) {
      return false;
    }
  }
  return true;
};
export var formatStringToCurrency = (value: any) => {
  value = value.toString().replaceAll('.', '');
  value = value.toString().replaceAll(',', '');
  return Intl.NumberFormat('vi-VN').format(value);
};
export let testPhone = (phone: any) => {
  let pattern = '';
  for (let i = 0; i < phone.length; i++) {
    if (isNaN(phone[i]) && [')', '(', '+', '-'].indexOf(phone[i]) < 0) {
      return false;
    }
    pattern += phone[i] >= '0' && phone[i] <= '9' ? 'x' : phone[i];
  }

  return (
    [
      'xxx-xxx-xxxx',
      'xxxxxxxxx',
      'xxxxxxxxxx',
      '(xxx)xxxxxxx',
      '(xxx)xxx-xxxx',
      '(+xx)xxxxxxxxx',
    ].indexOf(pattern) >= 0
  );
};

export var removeAscent = (str: string) => {
  if (str === null || str === undefined) return str;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  return str;
};
export const convertTotalTime = (mins: number) => {
  var hours = Math.trunc(mins / 60);
  var minutes = mins % 60;
  if (hours == 0 && minutes == 0) {
    return `0`;
  } else {
    return `${hours} giờ ${minutes} phút`;
  }
};

export const getUserInfo = () => {
  return localStorage.getItem('userInfo');
};

export const decodeJWT = () => {
  if (localStorage.getItem('userToken')) {
    let decoded = jwtDecode(String(localStorage.getItem('userToken')));
    return decoded;
  } else {
    window.location.href = '/auth/login';
    return null;
  }
};

export const phoneNumberValidator = (
  control: UntypedFormControl
): { [s: string]: boolean } | null => {
  if (control.value && !testPhone(control.value)) {
    return { validated: true, error: true };
  }
  return null;
};

export const convertTime = (dateString: string): string => {
  if (dateString) {
    let date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  } else {
    return '';
  }
  // format dateString to '25/03/2015'
};

export var emailValidator = (
  control: UntypedFormControl
): { [s: string]: boolean } | null => {
  if (control.value && !testEmailAddress(control.value)) {
    return { validated: true, error: true };
  }
  return null;
};

export var lengthValidator = (maxLength: number): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const valid = value && value.trim().length <= maxLength;

    return valid ? null : { maxLengthExceeded: { maxLength: maxLength, actualLength: value.length } };
  };
};

export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { 'whitespace': true } : null;
  };
}

export var currencyValidator = (
  control: UntypedFormControl
): { [s: string]: boolean } | null => {
  if (control.value && !testCurrency(control.value)) {
    return { validated: true, error: true };
  }
  return null;
};

export var disabledDate = (selectValue: Date): boolean => {
  var today = new Date();
  return (
    selectValue.getTime() <
    new Date(today.setDate(today.getDate() - 1)).getTime()
  );
};

// export const hasPermission = (permission: PERMISSION): boolean => {
//   let hasPermission = null;
//   let allRoles = Array.from(permissionRoles);
//   let currentRoles =
//     localStorage.getItem('roles') != null
//       ? localStorage.getItem('roles').split(',') || []
//       : [];
//   if (currentRoles != null) {
//     let rolesHasPermission = allRoles
//       .filter((e) => e.permissions.includes(permission))
//       .map((p) => p.name.toString());
//     hasPermission = currentRoles.some((e) => rolesHasPermission.includes(e));
//   }

//   return hasPermission;
// };


export const readChunk = (file: any, start: number, size: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const blob = file.slice(start, start + size);
    reader.onload = (event: any) => {
      resolve(event.target.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsBinaryString(blob);
  });
};

export const getSHA256ToStr = async (str: any): Promise<string> => {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encodeToLatin1 = (str: string) => {
      const bytes = new Uint8Array(str.length);
      for (let i = 0; i < str.length; ++i) {
        bytes[i] = str.charCodeAt(i) & 0xff;
      }
      return bytes;
    };

    const data = encodeToLatin1(str);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return hashHex;
  }

  const hash = CryptoJS.SHA256(CryptoJS.enc.Latin1.parse(str));
  return hash.toString(CryptoJS.enc.Hex);
};

export const getHashCodeOfFile = async (file: any, chunkSize: number): Promise<string> => {
  const numberOfChunks = 3;
  let concatenatedHash = '';

  if (file.size > (chunkSize * 3)) {
    for (let i = 0; i < numberOfChunks; i++) {
      const startPosition = (i === 0) ? 0 : (i === 1 ? (file.size / 2) - (chunkSize / 2) : file.size - chunkSize);
      const readChunks = await readChunk(file, startPosition, chunkSize);
      const hash = await getSHA256ToStr(readChunks);
      // console.log(hash, "anhvietcan");
      concatenatedHash += hash;
    }
  } else {
    const actualNumberOfChunks = Math.min(numberOfChunks, Math.ceil(file.size / chunkSize));
    for (let i = 0; i < actualNumberOfChunks; i++) {
      const startPosition = i * chunkSize;
      const readChunks = await readChunk(file, startPosition, chunkSize);
      const hash = await getSHA256ToStr(readChunks);
      concatenatedHash += hash;
      // console.log(hash, "anhvietcan");
    }
  }

  return getSHA256ToStr(concatenatedHash);
};

export const removeAccents = (string: string): string => {
  const accents = 'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝàáâãèéêìíòóôõùúýĂăĐđĨĩŨũƠơƯưỲỳỴỵỶỷỸỹ';
  const accentsOut = 'AAAAEEEIIOOOOUUYaaaaeeeiiioooouuyAaDdIiUuOoUuYyYyYy';

  return string
    .split('')
    .map((letter, index) => {
      const accentIndex = accents.indexOf(letter);
      return accentIndex !== -1 ? accentsOut[accentIndex] : letter;
    })
    .join('');
};


export const getFileExtension = (fileName: string): string => {
  if (!fileName) {
    return '';
  }
  const parts = fileName.split('.');
  if (parts.length === 1) {
    return '';
  }
  return parts.pop()?.toLocaleLowerCase() || '';
}

export const timeStringToMilliseconds = (timeString: string): number => {
  const timeParts = timeString.split(':');
  if (timeParts.length !== 3) {
    throw new Error('Invalid time format. Expected format HH:MM:SS');
  }

  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);
  const seconds = parseInt(timeParts[2], 10);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    throw new Error('Invalid time values. Hours, minutes, and seconds should be numbers.');
  }

  const milliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
  return milliseconds;
}

export const formatDateWithTimeZone = (date: Date): string => {
  const utcDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  const year = utcDate.getUTCFullYear();
  const month = String(utcDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(utcDate.getUTCDate()).padStart(2, '0');
  const hours = String(utcDate.getUTCHours()).padStart(2, '0');
  const minutes = String(utcDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(utcDate.getUTCSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}

export const deviceTimeZoneOffset = () => {
  const offset = -new Date().getTimezoneOffset();
  const sign = offset >= 0 ? '+' : '-';
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  return `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

export const getValueTagsConfig = (tag: any, listTags: any) => {
  let arr = tag.map((tag: any) => {
    const issue = listTags.find((source: any) => source?.label === tag || source?.name === tag);
    return issue ? (issue.value || issue.id || null) : null;
  }).filter((value: any) => value !== null);
  return arr;
};

export const generateComplexId = () => {
  const timestamp = performance.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 12);
  const extraRandom = (Math.random() * 1000000).toString(36);
  return `${timestamp}-${randomPart}-${extraRandom}`;
}