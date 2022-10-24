import { Module } from '@nestjs/common';
import { SharedModule } from './models/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
