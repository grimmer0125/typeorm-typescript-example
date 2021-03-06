import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Photo } from "./Photo";

// referencing table or child
// https://www.postgresqltutorial.com/postgresql-foreign-key/
@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  height: number;

  @Column("int")
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  // (photo) => photo.metadata) is for Inverse side of the relationship
  @OneToOne((type) => Photo, (photo) => photo.metadata)
  @JoinColumn() // = setup unique foreign key
  photo: Photo;
}
