import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsArrayOfStrings(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isArrayOfStrings',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (!(value instanceof Array)) {
                        return false;
                    }

                    for (const item of value) {
                        if (typeof item !== 'string') {
                            return false;
                        }
                    }

                    return true;
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} must be an array of strings.`;
                }
            }
        });
    };
}
