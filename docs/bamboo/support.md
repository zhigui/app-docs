---
sidebar: auto
sidebarDepth: 2
---

# Bamboo Support

Bamboo is a Markdown-based notes app for writing, organizing, and connecting your personal knowledge. This guide covers the main features available in the app and the most common questions about editing, organization, sync, backup, import, export, and subscriptions.

## Getting Started

### Create a note

Use the new note button in Bamboo to create a note. The first heading or first line of the note is used as the note title in lists and search results.

In **Settings > General**, you can choose the default template Bamboo uses when creating a new note.

### Navigate the app

Bamboo is organized around three main areas:

- **Sidebar**: built-in views such as All Notes, Today, To-Dos, Starred, Pinned, Archive, Trash, collections, and smart views.
- **Notes list**: notes matching the selected sidebar item.
- **Editor**: the Markdown writing area for the selected note.

On iPhone, the sidebar and inspector may appear as slide-out panels. On iPad and Mac, Bamboo uses a split-view layout when space is available.

## Writing and Formatting

### Markdown basics

Bamboo stores note content as Markdown. Common Markdown syntax works as expected:

````markdown
# Heading

**Bold text**
*Italic text*

- Bullet item
- [ ] Todo item
- [x] Completed todo

> Quote

`inline code`

```swift
print("Hello")
```
````

The editor also supports common writing conveniences such as syntax highlighting for fenced code blocks, task lists, tables, wiki links, footnotes, underline, highlight, and math syntax.

### Editor shortcuts

On macOS, Bamboo’s main editor shortcuts are exposed through the top menu bar, especially **Format** and **Find**. These are the shortcuts users should treat as the official Mac shortcut reference.

On iPhone and iPad, Bamboo also provides an editor formatting panel above the keyboard. It includes quick controls for moving lines, inserting images and files, taking photos, scanning documents, inserting tables, inserting dates, folding, headings, bold, italic, underline, strikethrough, indentation, lists, blockquotes, task lists, highlights, code, math, links, horizontal rules, superscript, subscript, and footnotes.

The macOS **Format** menu includes:

| Shortcut | Action |
| --- | --- |
| `Control-Command-1` through `Control-Command-6` | Apply Heading 1 through Heading 6 |
| `Command-U` | Underline |
| `Control-Command-M` | Strikethrough |
| `Command-Shift-M` | Highlight with the default highlight color |
| `Command-Shift-L` | Bullet list |
| `Option-Command-L` | Ordered list |
| `Command-L` | Task list |
| `Command-Shift-U` | Blockquote |
| `Option-Command-C` | Inline code |
| `Control-Command-C` | Code block |
| `Command-Shift-T` | Footnote |
| `Option-Command--` | Horizontal rule |
| `Option-Command-T` | Insert table |
| `Command-K` | Add link |
| `Command-D` | Insert wiki link |
| `Control-Command-V` | Insert attachment |
| `Command-Shift-X` | Inline math |

Table commands are available from the macOS **Format > Table** menu when the cursor is inside a table:

| Shortcut | Action |
| --- | --- |
| `Control-Command-Down Arrow` | Add row below |
| `Control-Command-Up Arrow` | Add row above |
| `Control-Command-Right Arrow` | Add column after |
| `Control-Command-Left Arrow` | Add column before |
| `Control-Command-Delete` | Delete row |
| `Control-Shift-Command-Delete` | Delete column |

Find commands are available on macOS when an editor is active:

| Shortcut | Action |
| --- | --- |
| `Command-F` | Find |
| `Option-Command-F` | Find and replace |
| `Command-G` | Find next |
| `Command-Shift-G` | Find previous |

### Hide Markdown marks

If you prefer a cleaner writing view, turn on **Settings > General > Hide Markdown**. Bamboo will visually reduce Markdown markup while keeping the underlying note content in Markdown.

### Images and attachments

You can insert images and other attachments into notes. Bamboo stores imported attachments in the app database and uses internal attachment references in the Markdown.

If **Settings > General > Save Remote Images As Local Attachments** is enabled, Bamboo can save supported remote images as local attachments when note content is normalized. This helps keep images available even if the original remote URL changes later.

## To-Dos and Reminders

### Create to-dos

Use Markdown task list syntax:

```markdown
- [ ] Buy milk
- [x] Send the invoice
```

Bamboo extracts checkbox items from active notes and shows them in To-Do views and widgets.

### Add reminders

Add a reminder token to a line, to-do, or heading:

```markdown
- [ ] Call Alex @(2026-06-01 09:00)
```

Supported reminder format:

```markdown
@(YYYY-MM-DD)
@(YYYY-MM-DD HH:mm)
@(YYYY-MM-DD HH:mm daily)
@(YYYY-MM-DD HH:mm weekly)
@(YYYY-MM-DD HH:mm monthly)
@(YYYY-MM-DD HH:mm yearly)
```

Add `done` inside the reminder token when the reminder is completed:

```markdown
Follow up @(2026-06-01 09:00 done)
```

In **Settings > General**, you can enable reminder notifications and choose the default reminder time used when a reminder has a date but no time. If notifications are denied at the system level, open the system notification settings and allow Bamboo notifications.

## Organizing Notes

### Collections

Collections are Bamboo’s folder-like organization system. A note can belong to one or more collections.

Collections can be nested. Bamboo represents nested collection paths with `/`, such as:

```text
Projects/Research
Projects/Personal
Archive/2026
```

You can assign collections from the note inspector. During import, Bamboo can also place imported notes into selected collections.


### Wiki links

Use wiki links to connect notes:

```markdown
[[Note Title]]
[[Note Title#Heading]]
[[Note Title|Display Text]]
```

Bamboo also recognizes embed-style Attachment:

```markdown
![[Attachment]]
```

Wiki links help build a connected knowledge base without needing to leave the editor.

### Pin, star, archive, and trash

From a note’s context menu or inspector, you can:

- **Pin** a note to keep it near the top of lists.
- **Star** a note for quick access.
- **Archive** a note to hide it from normal active-note views without deleting it.
- **Move to Trash** when you no longer need a note.

Notes in Trash can be restored. From Trash, deleting a note permanently removes it.

## Search

Use Bamboo search to find notes by keywords and phrases. Search results include note links so you can jump directly to a note.

Bamboo also includes sidebar filters for common workflows, including All Notes, Uncollected, To-Dos, Today, Starred, Pinned, Archive, Trash, collections, and smart views.

On Mac, you can configure the search panel shortcut in **Settings > General**.

## Import, Export, Backup, and Restore

### Import notes

Bamboo can import:

- Markdown: `.md`, `.markdown`
- TextBundle: `.textbundle`
- TextPack: `.textpack`

You can select individual files or folders. Bamboo scans selected folders for supported files.

During import, you can choose whether to:

- Keep original file creation and modification dates.
- Use the filename as the note title.
- Add imported notes to selected collections.

Bamboo skips duplicate notes when the imported content already exists.

### Export notes

Bamboo can export selected notes as:

- Markdown: `.md`
- TextBundle: `.textbundle`
- TextPack: `.textpack`
- HTML: `.html` *(Pro)*
- PDF: `.pdf` *(Pro)*

When exporting Markdown or HTML, Bamboo writes local attachments into a folder beside the exported file and updates image references accordingly. TextBundle and TextPack include assets in the bundle format.

### Back up all notes

Use **Backup all notes** to create a Bamboo backup file:

```text
.bamboobk
```

Backups include active notes, note metadata, collection paths, and attachments. The backup is designed for restoring into Bamboo.

### Restore a backup

Use **Restore Backup** and select a `.bamboobk` file. Bamboo restores notes and collection assignments from the backup and skips notes that already exist.

## iCloud Sync

iCloud Sync is a Pro feature.

Turn it on in **Settings > Sync > iCloud Sync**. Bamboo checks whether an iCloud account is available on the current device before enabling sync.

Important notes:

- You must be signed in to iCloud on each device.
- Sync must be enabled separately on each device.
- Turning sync off on one device does not turn it off on your other devices.
- If iCloud is unavailable, restricted, or temporarily unavailable, Bamboo shows the sync error in **Settings > Sync**.

The Sync settings screen also shows the last known sync time when sync metadata is available.

## Data Retention and Local Data

Open **Settings > Data Retention** to control cleanup rules.

You can choose whether Bamboo should:

- Keep Trash items forever or delete Trash pages after a set number of days.
- Keep version history forever or delete older snapshots after a set number of days.
- Run cleanup manually with **Run Cleanup Now**.

On devices with iCloud support, **Reset local data** removes local Bamboo data on the current device. It does not delete your data from iCloud.

## Appearance and Typography

Open **Settings > Appearance** to adjust the editor:

- Text font
- Heading font
- Code font
- Font size
- Line height
- Line width
- Paragraph spacing
- Paragraph indent

Use **Restore Defaults** to return typography settings to Bamboo’s default values.

## Assistant

Bamboo includes an assistant for working with your notes. Assistant features are configured in **Settings > Assistant**.

### Configure a model provider

Before using model-backed assistant features, add a provider and at least one chat model.

When adding a provider, Bamboo asks for:

- Display name
- Provider type
- Base URL, when required by that provider
- API key

Provider API keys are stored securely by the app. The provider record is stored in Bamboo’s database, while the secret key is kept separately in secure storage.

### Add and choose models

After adding a provider, add a model with:

- Display name
- Model identifier
- Provider
- Temperature
- Top P

Use **Default Chat Model** to choose the model Bamboo uses for new assistant conversations. Use **Title Generation Model** if you want Bamboo to generate a conversation title after the first assistant step.

### Tool permissions

Bamboo’s assistant can use tools to read and work with your notes, such as searching notes, listing collections, reading note content, updating note content, editing to-dos, and updating collections.

In **Default Permissions**, choose whether new chats should ask before running tools or start with broader access. Bamboo also tracks remembered permissions for higher-risk operations, such as delete operations or external side effects. You can remove individual remembered permissions or clear them all in **Dangerous Operation Permissions**.

### History compaction

Assistant conversations can grow long. In **History Compaction**, Bamboo lets you set a token window. When recent assistant usage exceeds that window, Bamboo summarizes older history so the conversation can continue with less context pressure.

Some assistant capabilities require Pro access and a configured model provider.

## Widgets

Bamboo includes Home Screen and desktop widgets backed by the app’s shared database.

Currently available widgets include:

- **Single Note**: choose one note and keep it visible.
- **To-Dos**: show extracted checkbox items from active notes.
- **Notes**: show recent notes from All Notes, Uncollected, To-Do, Today, a Smart View, or a collection.
- **Last Edited Note**: reopen the most recently edited note.

On iOS 18 and later, Bamboo also provides Control Center controls for:

- Create Note
- Search Notes

Tapping a widget opens Bamboo through an app link. To-do widgets can toggle a to-do directly from the widget when interactive widgets are supported by the system. If the widget says the database is unavailable or shows no content, open Bamboo once and make sure the app and widget can access the shared app group data.

## Browser Clipping

Bamboo supports clipped Markdown imports through its app link system and Safari extension integration.

A clip can include:

- Title
- Markdown content
- Optional collection path, such as `Research/Web`
- Clipboard mode, where Bamboo reads the clip content from the system clipboard

When a clip includes a collection path, Bamboo creates missing collection path segments as needed and places the new note there. The clipped content is imported as Markdown and then handled like any other Bamboo note.

## Advanced: App Links, CLI, and MCP

Bamboo supports app links using the `bamboo://` URL scheme. These are useful for shortcuts, widgets, automations, and integrations with other apps.

Supported actions include:

```text
bamboo://main
bamboo://create-note
bamboo://search?query=...
bamboo://open-note?id=<note-uuid>
bamboo://open-note?title=<note-title>
bamboo://note/<note-uuid>
bamboo://collection?id=<collection-uuid>
bamboo://smart-view?id=<smart-view-uuid>
bamboo://clip?title=...&content=...
```

Note links can also include a text range or heading target:

```text
bamboo://open-note?id=<note-uuid>&from=<offset>&to=<offset>
bamboo://open-note?id=<note-uuid>&header=<heading>
```

Clip links support either direct content or clipboard import:

```text
bamboo://clip?title=Example&content=<markdown>
bamboo://clip?title=Example&collection=Research/Web&clipboard=1
```

### Command line

Bamboo includes `bamboocli` for command-line workflows.

Common commands include:

```json
bamboocli search "query"
bamboocli list --filter pinned
bamboocli show <note-uuid>
bamboocli create --content "# New note"
bamboocli overwrite <note-uuid> --content "# Replacement"
bamboocli replace <note-uuid> --text "Updated line" --line 3
bamboocli collections
bamboocli todos
bamboocli edit-todo <todo-uuid> --text "[x] Done"
bamboocli mcp-server
```

The `list` command supports filters such as `allNotes`, `uncollected`, `toDo`, `today`, `starred`, `pinned`, `archive`, and `trash`. Output can be rendered as TSV, CSV, or JSON with `--format`.

### MCP server

`bamboocli mcp-server` runs Bamboo’s MCP server over stdio. It exposes note tools for creating notes, reading note content, replacing ranges, searching notes, listing notes, listing collections, listing to-dos, and editing to-dos.

Most MCP clients use the same JSON config shape:

```json
{
  "mcpServers": {
    "bamboo": {
      "command": "/Applications/Bamboo.app/Contents/MacOS/bamboocli",
      "args": ["mcp-server"]
    }
  }
}
```

These advanced features are intended for automation and developer workflows.

## Subscription and Pro Features

Bamboo Pro is available as a monthly or yearly subscription through the App Store.

Pro-gated areas currently include:

- iCloud Sync
- Assistant configuration and advanced assistant workflows
- HTML export
- PDF export

Bamboo checks App Store entitlements to determine whether Pro is active. Subscription management, cancellation, renewal, and purchase restoration are handled through Apple’s App Store system. If subscription products or entitlements cannot be loaded, try again later and confirm that the device can reach the App Store.

## Troubleshooting

### iCloud Sync will not turn on

Check that:

- Bamboo Pro is active.
- You are signed in to iCloud on this device.
- iCloud is not restricted by Screen Time, device management, or account settings.
- The device has network access.

If iCloud is restricted, temporarily unavailable, or Bamboo cannot determine account status, the Sync settings screen shows an error message.

### Notes are not appearing on another device

Confirm that:

- Bamboo Pro is active.
- iCloud Sync is enabled on both devices.
- Both devices are signed in to the intended iCloud account.
- The device has network access.

Turning sync off on one device does not turn it off everywhere. Check the Sync setting on each device separately.

### Last sync says Never

This can happen before Bamboo has sync metadata from iCloud. Leave Bamboo open with network access and check **Settings > Sync** again after changes have had time to upload and download.

### Import says files were skipped

Bamboo skips duplicate notes when the same content already exists. If all selected files are duplicates, the import may report that there are no new notes to import.

### Imported Markdown images are missing

When importing Markdown files with local images, keep the image files in the same folder structure referenced by the Markdown. On macOS, Bamboo may ask for folder access so it can read those assets.

### Exported Markdown has an extra folder

That folder contains exported attachments. Keep it beside the `.md` file so image links continue to work.

### PDF or HTML export is disabled

HTML and PDF export require Bamboo Pro. Markdown, TextBundle, and TextPack export are available without Pro.

### Reminder notifications do not appear

Make sure **Settings > General > Enable Reminder Notification** is turned on and that Bamboo is allowed to send notifications in the system settings.

Also check the reminder syntax. A reminder should look like:

```markdown
@(2026-06-01 09:00)
```

The date must use `YYYY-MM-DD`, and the time must use 24-hour `HH:mm` format.

### Widgets show no notes

Open Bamboo once so the shared database is initialized and available to widgets. For configurable widgets such as Single Note or Notes, edit the widget and choose the note or location you want to display.

### Assistant cannot respond

Check **Settings > Assistant**:

- A provider has been added.
- The provider has a valid API key.
- A chat model has been added for that provider.
- A default chat model is selected.

If the provider uses a custom endpoint, confirm that the Base URL and model identifier match your provider’s requirements.

## Contact and Policies

You can open Bamboo’s support and privacy pages from **Settings**:

- Support: <https://zhigui.github.io/app-docs/bamboo/support.html>
- Privacy Policy: <https://zhigui.github.io/app-docs/bamboo/privacy_policy.html>

For subscription terms, Bamboo uses Apple’s standard End User License Agreement:

<https://www.apple.com/legal/internet-services/itunes/dev/stdeula/>
