import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';
import { ScrapeFormat } from '../types/scrape.types';

export class CrawlRequestDto {
  @IsString()
  @IsUrl({ require_protocol: false })
  url!: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  maxPages?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(8)
  maxDepth?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1_000)
  @Max(60_000)
  timeoutMs?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(20_000)
  @Max(5_000_000)
  maxContentLength?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(2_000)
  maxLinks?: number;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  renderJavaScript?: boolean;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  @Max(10_000)
  waitForMs?: number;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(20)
  @IsString({ each: true })
  excludePatterns?: string[];

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  sameDomain?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  includeSubdomains?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  ignoreQueryParams?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  onlyMainContent?: boolean;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  includeContent?: boolean;

  @IsOptional()
  @IsArray()
  @ArrayMaxSize(5)
  @IsEnum(ScrapeFormat, { each: true })
  formats?: ScrapeFormat[];
}
