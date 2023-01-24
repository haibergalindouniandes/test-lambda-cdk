import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { join } from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestLambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1) Creacion de la lambda
    // 2) Enalazamos la lambda a un construct
    // 3) Una vez configurada nuestra funcion, creamos el template ejecutando en la terminal el comando: cdk synth --o ./templates
    // 4) Despues de haberse creado el template, realizamos la implementación de la pila del kit de herramientas de CDK en el ambiente AWS: cdk bootstrap
    // 4) Despues de haberse creado el template, realizamos el deploy con el comando: cdk deploy

    new Function(this, 'my-lambda-test-user', {
      runtime: Runtime.NODEJS_18_X,
      code: Code.fromAsset(join(__dirname, '../lambdas')),
      handler: 'hello.world'
    });

  }
}
