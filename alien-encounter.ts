type FriendlyAlien = { name: string; greeting: string };
type HostileAlien = { name: string; weapon: string };
type AlienContact = FriendlyAlien | HostileAlien;

function handleEncounter(contact: AlienContact): void {
    if ("greeting" in contact) {
        console.log(`${contact.name} says: ${contact.greeting}`);
    } else {
        console.log(`Warning! Hostile alien ${contact.name} detected, armed with ${contact.weapon}!`);
    }
}
