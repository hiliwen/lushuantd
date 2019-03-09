import { Context } from 'create-react-context';
import { ColProps } from '../grid/col';
export interface FormContextProps {
    vertical: boolean;
    labelCol?: ColProps;
    wrapperCol?: ColProps;
}
export declare const FormContext: Context<FormContextProps>;