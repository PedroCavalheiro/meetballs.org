use std::process::Command;

fn main() {
    println!("cargo:rerun-if-changed=templates/");
    // Run tailwind for the templates
    Command::new("npx")
        .args([
            "tailwindcss",
            "-i",
            "src/tailwind.css",
            "-o",
            "public/main.css",
        ])
        .status()
        .unwrap();

    // Run prettier for the templates
    // This ensures that the tailwind classes are in the right order
    Command::new("npx")
        .args(["prettier", "--write", "."])
        .status()
        .unwrap();
}
