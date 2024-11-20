import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitQMService } from 'Apps/RabittQM/RabbitQM.service';
import { IRmqSeverName, RABBIT_SERVICES } from 'Interface/ServerName';
// import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(cookieParser());
  // Enable CORS for all routes
  app.enableCors({
    origin: true,
    // origin: ["http://localhost:5173"],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });
  const rmqService = app.get<RabbitQMService>(RabbitQMService);
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.connectMicroservice(rmqService.getOptions(RABBIT_SERVICES[IRmqSeverName.GATEWAY].queue))
  await app.listen(process.env.PORT ?? 3000);
}


