
import { regPhone } from '@/utils/validator'
import { regCode, regPassword } from '../utils/validator';
// 表单校验
export async function checkPhone (rule :any, value :string, callback :any) :Promise<void> {
  if (!value) {
    return Promise.reject('请输入手机号');
  }
  if (!regPhone(value)) {
    return Promise.reject('手机号错误');
  } 
  return Promise.resolve()
}


// 密码校验
export async function checkPassword (rule :any, value  :string, callback :any) :Promise<void> {
  if (!value) {
    return Promise.reject('请输入密码');
  }
  if (!regPassword(value)) {
    return Promise.reject('密码为6-20位数字+字母');
  } 
  return Promise.resolve()
}


// 确认密码校验
export async function checkConfirm (rule :any, value  :string, callback :any) :Promise<void>{
  if (!value) {
    return Promise.reject('请输入确认密码');
  }
  if (!regPassword(value)) {
    return Promise.reject('密码为6-20位数字+字母');
  } 
  return Promise.resolve()
}



// 校验码校验
export async function checkCode (rule :any, value :string, callback :any) :Promise<void>{
  if (!value) {
    return Promise.reject('请输入校验码');
  }
  if (!regCode(value)) {
    return Promise.reject('校验码6位数字+字母');
  } 
  return Promise.resolve()
}