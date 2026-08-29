#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createNote } from "./notes.js";

yargs(hideBin(process.argv))
  //   .command(
  //     "serve [port]",
  //     "start the server",
  //     (yargs) => {
  //       return yargs.positional("port", {
  //         describe: "port to bind on",
  //         default: 5000,
  //       });
  //     },
  //     (argv) => {
  //       if (argv.verbose) console.info(`start server on :${argv.port}`);
  //       serve(argv.port);
  //     },
  //   )
  //   .option("verbose", {
  //     alias: "v",
  //     type: "boolean",
  //     description: "Run with verbose logging",
  //   })
  .command("notes <action>", "Manage your notes", (yargs) => {
    return yargs
      .command(
        "add <note>",
        "Create a new note",
        (yargs) =>
          yargs
            .positional("note", {
              type: "string",
              description: "Note title/comment",
            })
            .option("tags", {
              alias: "T",
              type: "array",
              description: "Tags for the note",
            }),
        async (argv) => {
          const result = await createNote(argv.note, argv.tags);
          console.log("Note added!", result);
        },
      )
      .command(
        "list",
        "List all notes",
        () => {},
        (argv) => console.log("List all notes"),
      )
      .command(
        "remove <id>",
        "Delete a note by id",
        () => {},
        (argv) => console.log(`Remove a note with id:${argv.id}`),
      )
      .command(
        "change <id> <note>",
        "Change a note by ID",
        (yargs) => {
          return yargs
            .positional("id", {
              type: "string",
              description: "ID of the note to be changed",
            })
            .positional("note", {
              type: "string",
              description: "Note title/comment",
            });
        },
        (argv) => console.log(`Note changed with id: ${argv.id}:`, argv.note),
      )
      .command(
        "cleanup",
        "Delete all notes",
        () => {},
        (argv) => console.log("Dlete all notes..."),
      )
      .command(
        "get <id>",
        "Get note by ID",
        (yargs) =>
          yargs.positional("id", {
            type: "string",
            description: "Get note by ID",
          }),
        (argv) => console.log(`Get note by ID:${id}`),
      );
  })
  .demandCommand(1)
  .parse();
