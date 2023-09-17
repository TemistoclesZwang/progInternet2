// array-not-empty.decorator.ts

import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function ArrayNotEmpty(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'arrayNotEmpty',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return value instanceof Array && value.length > 0;
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} must not be empty.`;
                }
            }
        });
    };
}
